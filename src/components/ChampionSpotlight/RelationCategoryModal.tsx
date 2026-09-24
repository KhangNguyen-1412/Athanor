import React, { useState, useMemo, useEffect } from 'react';
import type { RelationCategory } from '../../types/athanor';
import {
  relationCategoryStore,
  AVAILABLE_CATEGORY_ICONS,
  AVAILABLE_PALETTE_COLORS,
  renderCategoryIcon
} from '../../utils/relationCategoryStore';
import { heroCustomStore } from '../../utils/heroCustomStore';
import { X, Plus, Edit3, Trash2, Check, RotateCcw, Tag } from 'lucide-react';
import { useBodyScrollLock } from '../../utils/useBodyScrollLock';
import './RelationCategoryModal.css';

interface RelationCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCategoriesChanged?: () => void;
}

interface CategoryDraft {
  id: string;
  name: string;
  color: string;
  iconName: string;
  description: string;
  isNew: boolean;
}

export const RelationCategoryModal: React.FC<RelationCategoryModalProps> = ({
  isOpen,
  onClose,
  onCategoriesChanged
}) => {
  useBodyScrollLock(isOpen);

  const [categories, setCategories] = useState<RelationCategory[]>(() =>
    relationCategoryStore.getCategories()
  );

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [draft, setDraft] = useState<CategoryDraft>({
    id: '',
    name: '',
    color: '#007ba7',
    iconName: 'Swords',
    description: '',
    isNew: true
  });

  // Calculate usage counts for each category
  const allRelations = useMemo(() => heroCustomStore.getRelations(), [categories]);
  const usageCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    allRelations.forEach((r) => {
      counts[r.relationType] = (counts[r.relationType] || 0) + 1;
    });
    return counts;
  }, [allRelations]);

  useEffect(() => {
    const refresh = () => {
      setCategories(relationCategoryStore.getCategories());
      onCategoriesChanged?.();
    };
    window.addEventListener('athanor-categories-updated', refresh);
    return () => window.removeEventListener('athanor-categories-updated', refresh);
  }, [onCategoriesChanged]);

  if (!isOpen) return null;

  const handleOpenAdd = () => {
    setDraft({
      id: '',
      name: '',
      color: '#007ba7',
      iconName: 'Swords',
      description: '',
      isNew: true
    });
    setIsEditing(true);
  };

  const handleOpenEdit = (cat: RelationCategory) => {
    setDraft({
      id: cat.id,
      name: cat.name,
      color: cat.color,
      iconName: cat.iconName,
      description: cat.description || '',
      isNew: false
    });
    setIsEditing(true);
  };

  const handleSaveDraft = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draft.name.trim()) {
      alert('Vui lòng nhập tên danh mục quan hệ.');
      return;
    }

    if (draft.isNew) {
      const generatedId =
        draft.id.trim() ||
        draft.name
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[^a-z0-9]+/g, '_')
          .replace(/^_+|_+$/g, '');

      relationCategoryStore.addCategory({
        id: generatedId || `cat_${Date.now()}`,
        name: draft.name.trim(),
        color: draft.color,
        iconName: draft.iconName,
        description: draft.description.trim()
      });
    } else {
      relationCategoryStore.updateCategory(draft.id, {
        name: draft.name.trim(),
        color: draft.color,
        iconName: draft.iconName,
        description: draft.description.trim()
      });
    }

    setIsEditing(false);
  };

  const handleDelete = (cat: RelationCategory) => {
    const count = usageCounts[cat.id] || 0;
    if (count > 0) {
      const confirmDel = window.confirm(
        `Danh mục "${cat.name}" đang được sử dụng bởi ${count} mối quan hệ sử thi trong hệ thống.\nBạn có chắc chắn muốn xóa danh mục này?`
      );
      if (!confirmDel) return;
    } else {
      const confirmDel = window.confirm(`Bạn có chắc chắn muốn xóa danh mục "${cat.name}"?`);
      if (!confirmDel) return;
    }

    relationCategoryStore.deleteCategory(cat.id);
  };

  const handleResetDefaults = () => {
    const confirmReset = window.confirm(
      'Bạn có chắc chắn muốn khôi phục danh mục về 6 loại mặc định của Athanor?'
    );
    if (!confirmReset) return;

    relationCategoryStore.resetCategories();
    setIsEditing(false);
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      onWheel={(e) => {
        if (e.target === e.currentTarget) {
          e.preventDefault();
        }
      }}
      style={{ zIndex: 1200 }}
    >
      <div
        className="editorial-category-modal-container editorial-frame animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Folio Ribbon */}
        <div className="category-modal-ribbon">
          <div className="category-ribbon-left">
            <Tag size={14} className="text-cerulean" />
            <span className="category-ribbon-tag text-cerulean">DANH MỤC LƯU TRỮ SỬ THI</span>
            <span className="category-ribbon-sep">/</span>
            <span className="category-ribbon-title">QUẢN LÝ CÁC LOẠI MỐI QUAN HỆ</span>
          </div>
          <button className="editorial-close-btn" onClick={onClose} title="Đóng">
            <X size={15} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="category-modal-body custom-scrollbar">
          <div className="category-guide-box">
            <p>
              Hệ thống cho phép bạn <strong>thêm mới, đổi tên, thay đổi màu sắc và biểu tượng</strong> của các loại quan hệ chiến sự và duyên nợ. Mọi tùy chỉnh sẽ được áp dụng ngay trên <em>Bản Đồ Tỏa Tròn</em> và <em>Studio Cập Nhật Tướng</em>.
            </p>
            {!isEditing && (
              <button
                type="button"
                className="btn-primary btn-add-cat"
                onClick={handleOpenAdd}
              >
                <Plus size={14} />
                <span>THÊM DANH MỤC MỚI</span>
              </button>
            )}
          </div>

          {/* Add / Edit Form */}
          {isEditing && (
            <form onSubmit={handleSaveDraft} className="category-form-card editorial-frame">
              <div className="category-form-header">
                <span className="category-form-title">
                  {draft.isNew ? 'THÊM MỚI DANH MỤC QUAN HỆ' : `CHỈNH SỬA: ${draft.name}`}
                </span>
                <button
                  type="button"
                  className="editorial-close-btn"
                  onClick={() => setIsEditing(false)}
                >
                  <X size={14} />
                </button>
              </div>

              <div className="category-form-grid">
                {/* Field 1: Name */}
                <div className="cat-form-group">
                  <label className="cat-form-label">TÊN DANH MỤC (*):</label>
                  <input
                    type="text"
                    className="cat-input"
                    placeholder="Ví dụ: Chúa Tể & Bầy Tôi, Sư Đồ, Tình Yêu..."
                    value={draft.name}
                    onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                    required
                  />
                </div>

                {/* Field 2: Identifier Code / Slug */}
                <div className="cat-form-group">
                  <label className="cat-form-label">MÃ ĐỊNH DANH (ID SLUG):</label>
                  <input
                    type="text"
                    className="cat-input"
                    placeholder="Để trống sẽ tự tạo từ tên (vd: master_servant)"
                    value={draft.id}
                    disabled={!draft.isNew}
                    onChange={(e) => setDraft({ ...draft, id: e.target.value })}
                  />
                  {!draft.isNew && (
                    <span className="cat-field-hint">Mã định danh không thể sửa để tránh gãy liên kết quan hệ cũ.</span>
                  )}
                </div>

                {/* Field 3: Color Palette Picker */}
                <div className="cat-form-group span-2">
                  <label className="cat-form-label">MÀU SẮC ĐẠI DIỆN:</label>
                  <div className="cat-color-picker-row">
                    <div className="palette-swatches">
                      {AVAILABLE_PALETTE_COLORS.map((col) => (
                        <button
                          key={col}
                          type="button"
                          className={`palette-circle ${draft.color === col ? 'selected' : ''}`}
                          style={{ backgroundColor: col }}
                          onClick={() => setDraft({ ...draft, color: col })}
                        />
                      ))}
                    </div>
                    <div className="custom-color-input-wrap">
                      <input
                        type="color"
                        value={draft.color}
                        onChange={(e) => setDraft({ ...draft, color: e.target.value })}
                        className="native-color-picker"
                      />
                      <span className="color-hex-text">{draft.color.toUpperCase()}</span>
                    </div>
                  </div>
                </div>

                {/* Field 4: Icon Picker */}
                <div className="cat-form-group span-2">
                  <label className="cat-form-label">BIỂU TƯỢNG (ICON):</label>
                  <div className="cat-icon-picker-grid">
                    {AVAILABLE_CATEGORY_ICONS.map((ico) => {
                      const isSelected = draft.iconName === ico.name;
                      return (
                        <button
                          key={ico.name}
                          type="button"
                          className={`icon-pick-btn ${isSelected ? 'selected' : ''}`}
                          style={{
                            borderColor: isSelected ? draft.color : undefined,
                            color: isSelected ? draft.color : undefined,
                            background: isSelected ? `${draft.color}14` : undefined
                          }}
                          onClick={() => setDraft({ ...draft, iconName: ico.name })}
                          title={ico.label}
                        >
                          {ico.icon}
                          <span className="icon-pick-label">{ico.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Field 5: Description */}
                <div className="cat-form-group span-2">
                  <label className="cat-form-label">MÔ TẢ Ý NGHĨA:</label>
                  <textarea
                    rows={2}
                    className="cat-textarea"
                    placeholder="Giải thích ngắn về tính chất mối quan hệ này..."
                    value={draft.description}
                    onChange={(e) => setDraft({ ...draft, description: e.target.value })}
                  />
                </div>
              </div>

              {/* Form Actions */}
              <div className="cat-form-actions">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setIsEditing(false)}
                >
                  Hủy
                </button>
                <button type="submit" className="btn-primary">
                  <Check size={14} />
                  <span>{draft.isNew ? 'Lưu Danh Mục Mới' : 'Lưu Thay Đổi'}</span>
                </button>
              </div>
            </form>
          )}

          {/* Categories List Ledger */}
          <div className="categories-ledger-list">
            <div className="ledger-list-head">
              <span className="ledger-head-title">DANH SÁCH DANH MỤC HIỆN HÀNH ({categories.length})</span>
            </div>

            <div className="categories-grid">
              {categories.map((cat) => {
                const count = usageCounts[cat.id] || 0;
                return (
                  <div
                    key={cat.id}
                    className="category-ledger-card editorial-frame"
                    style={{ '--cat-accent': cat.color } as React.CSSProperties}
                  >
                    <div className="cat-card-top">
                      <div
                        className="cat-card-icon-badge"
                        style={{ backgroundColor: `${cat.color}15`, color: cat.color, borderColor: cat.color }}
                      >
                        {renderCategoryIcon(cat.iconName, 18)}
                      </div>

                      <div className="cat-card-info">
                        <div className="cat-card-title-row">
                          <h4 className="cat-card-name" style={{ color: cat.color }}>
                            {cat.name}
                          </h4>
                          {cat.isDefault && <span className="default-pill">GỐC</span>}
                        </div>
                        <span className="cat-card-slug">ID: #{cat.id}</span>
                      </div>
                    </div>

                    <p className="cat-card-desc">{cat.description || 'Chưa có mô tả cho loại quan hệ này.'}</p>

                    <div className="cat-card-footer">
                      <span className="cat-usage-count">
                        <strong>{count}</strong> mối quan hệ
                      </span>

                      <div className="cat-card-btn-group">
                        <button
                          type="button"
                          className="cat-btn edit"
                          onClick={() => handleOpenEdit(cat)}
                          title="Chỉnh sửa danh mục"
                        >
                          <Edit3 size={13} />
                          <span>Sửa</span>
                        </button>
                        <button
                          type="button"
                          className="cat-btn delete"
                          onClick={() => handleDelete(cat)}
                          title="Xóa danh mục này"
                        >
                          <Trash2 size={13} />
                          <span>Xóa</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="category-modal-footer">
          <button
            type="button"
            className="editor-action-link"
            onClick={handleResetDefaults}
            title="Khôi phục danh mục về 6 loại mặc định của hệ thống"
          >
            <RotateCcw size={13} />
            <span>Khôi phục danh mục mặc định</span>
          </button>

          <button type="button" className="btn-secondary" onClick={onClose}>
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
