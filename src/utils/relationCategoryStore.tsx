import React from 'react';
import type { RelationCategory } from '../types/athanor';
import {
  Swords,
  Handshake,
  Heart,
  Zap,
  GraduationCap,
  Crown,
  Shield,
  Flame,
  Star,
  Flag,
  Skull,
  Eye,
  Crosshair,
  Scale,
  Feather,
  Sparkles,
  Link,
  Users
} from 'lucide-react';

export const DEFAULT_RELATION_CATEGORIES: RelationCategory[] = [
  {
    id: 'enemy',
    name: 'Tử Thù',
    color: '#c43d3b',
    iconName: 'Swords',
    description: 'Mối thù không đội trời chung, đối đầu sinh tử trên chiến trường',
    isDefault: true
  },
  {
    id: 'ally',
    name: 'Đồng Minh',
    color: '#007ba7',
    iconName: 'Handshake',
    description: 'Liên minh cùng chung chí hướng, sát cánh bảo vệ đại lục',
    isDefault: true
  },
  {
    id: 'love',
    name: 'Tình Ái & Tri Kỷ',
    color: '#e11d48',
    iconName: 'Heart',
    description: 'Mối tơ duyên, tình yêu sâu đậm vượt qua sinh tử và định mệnh',
    isDefault: true
  },
  {
    id: 'rival',
    name: 'Kình Địch / Huynh Đệ',
    color: '#d97706',
    iconName: 'Zap',
    description: 'Đối thủ cạnh tranh truyền thừa hoặc huynh đệ đồng môn tương khắc',
    isDefault: true
  },
  {
    id: 'mentor',
    name: 'Sư Đồ / Dẫn Dắt',
    color: '#7c3aed',
    iconName: 'GraduationCap',
    description: 'Quan hệ thầy trò, truyền nhân kế thừa đại nghiệp',
    isDefault: true
  },
  {
    id: 'kin',
    name: 'Huyết Thống / Thân Tộc',
    color: '#4f46e5',
    iconName: 'Crown',
    description: 'Người cùng chung dòng máu, hoàng tộc hoặc gia tộc lớn',
    isDefault: true
  }
];

export const AVAILABLE_CATEGORY_ICONS: { name: string; label: string; icon: React.ReactNode }[] = [
  { name: 'Swords', label: 'Song Kiếm', icon: <Swords size={15} /> },
  { name: 'Handshake', label: 'Bắt Tay', icon: <Handshake size={15} /> },
  { name: 'Heart', label: 'Trái Tim', icon: <Heart size={15} /> },
  { name: 'Zap', label: 'Tia Sét', icon: <Zap size={15} /> },
  { name: 'GraduationCap', label: 'Mũ Cử Nhân', icon: <GraduationCap size={15} /> },
  { name: 'Crown', label: 'Vương Miện', icon: <Crown size={15} /> },
  { name: 'Shield', label: 'Khiên Chắn', icon: <Shield size={15} /> },
  { name: 'Flame', label: 'Ngọn Lửa', icon: <Flame size={15} /> },
  { name: 'Star', label: 'Ngôi Sao', icon: <Star size={15} /> },
  { name: 'Flag', label: 'Lá Cờ', icon: <Flag size={15} /> },
  { name: 'Skull', label: 'Đầu Lâu', icon: <Skull size={15} /> },
  { name: 'Eye', label: 'Con Mắt', icon: <Eye size={15} /> },
  { name: 'Crosshair', label: 'Tâm Ngắm', icon: <Crosshair size={15} /> },
  { name: 'Scale', label: 'Cán Cân', icon: <Scale size={15} /> },
  { name: 'Feather', label: 'Lông Vũ', icon: <Feather size={15} /> },
  { name: 'Sparkles', label: 'Ánh Sao', icon: <Sparkles size={15} /> },
  { name: 'Link', label: 'Sợi Xích', icon: <Link size={15} /> },
  { name: 'Users', label: 'Nhóm Người', icon: <Users size={15} /> }
];

export const AVAILABLE_PALETTE_COLORS = [
  '#c43d3b', // Jasper
  '#007ba7', // Cerulean
  '#e11d48', // Rose
  '#d97706', // Amber
  '#7c3aed', // Violet
  '#4f46e5', // Indigo
  '#059669', // Emerald
  '#0891b2', // Cyan
  '#ea580c', // Orange
  '#9333ea', // Purple
  '#475569', // Slate
  '#b91c1c'  // Deep Red
];

export function renderCategoryIcon(iconName: string, size = 14, className = ''): React.ReactNode {
  switch (iconName) {
    case 'Swords': return <Swords size={size} className={className} />;
    case 'Handshake': return <Handshake size={size} className={className} />;
    case 'Heart': return <Heart size={size} className={className} />;
    case 'Zap': return <Zap size={size} className={className} />;
    case 'GraduationCap': return <GraduationCap size={size} className={className} />;
    case 'Crown': return <Crown size={size} className={className} />;
    case 'Shield': return <Shield size={size} className={className} />;
    case 'Flame': return <Flame size={size} className={className} />;
    case 'Star': return <Star size={size} className={className} />;
    case 'Flag': return <Flag size={size} className={className} />;
    case 'Skull': return <Skull size={size} className={className} />;
    case 'Eye': return <Eye size={size} className={className} />;
    case 'Crosshair': return <Crosshair size={size} className={className} />;
    case 'Scale': return <Scale size={size} className={className} />;
    case 'Feather': return <Feather size={size} className={className} />;
    case 'Sparkles': return <Sparkles size={size} className={className} />;
    case 'Link': return <Link size={size} className={className} />;
    case 'Users': return <Users size={size} className={className} />;
    default: return <Swords size={size} className={className} />;
  }
}

const STORAGE_KEY = 'athanor_relation_categories_v1';

export const relationCategoryStore = {
  getCategories(): RelationCategory[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // fallback
    }
    return DEFAULT_RELATION_CATEGORIES;
  },

  getCategory(id: string): RelationCategory {
    const list = this.getCategories();
    const found = list.find((c) => c.id === id);
    if (found) return found;
    // Fallback if deleted or custom
    return {
      id,
      name: id.toUpperCase(),
      color: '#64748b',
      iconName: 'Link',
      description: 'Mối quan hệ đặc biệt'
    };
  },

  addCategory(category: Omit<RelationCategory, 'isDefault'>): RelationCategory {
    const list = this.getCategories();
    // Ensure slug ID
    let finalId = category.id?.trim().toLowerCase().replace(/\s+/g, '_') || '';
    if (!finalId) {
      finalId = 'cat_' + Date.now();
    }
    // Prevent ID duplicate
    if (list.some((c) => c.id === finalId)) {
      finalId = `${finalId}_${Date.now().toString().slice(-4)}`;
    }

    const newCat: RelationCategory = {
      ...category,
      id: finalId,
      isDefault: false
    };

    const updated = [...list, newCat];
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent('athanor-categories-updated'));
    } catch (e) {
      console.error('Failed to add category:', e);
    }
    return newCat;
  },

  updateCategory(id: string, updates: Partial<RelationCategory>): RelationCategory | null {
    const list = this.getCategories();
    let updatedCat: RelationCategory | null = null;

    const updatedList = list.map((c) => {
      if (c.id === id) {
        updatedCat = {
          ...c,
          ...updates,
          id: c.id // ID cannot be mutated to preserve relationship integrity
        };
        return updatedCat;
      }
      return c;
    });

    if (updatedCat) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
        window.dispatchEvent(new CustomEvent('athanor-categories-updated'));
      } catch (e) {
        console.error('Failed to update category:', e);
      }
    }
    return updatedCat;
  },

  deleteCategory(id: string): boolean {
    const list = this.getCategories();
    const filtered = list.filter((c) => c.id !== id);
    if (filtered.length === list.length) return false;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
      window.dispatchEvent(new CustomEvent('athanor-categories-updated'));
      return true;
    } catch (e) {
      console.error('Failed to delete category:', e);
      return false;
    }
  },

  resetCategories() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_RELATION_CATEGORIES));
      window.dispatchEvent(new CustomEvent('athanor-categories-updated'));
    } catch (e) {
      console.error('Failed to reset categories:', e);
    }
  }
};
