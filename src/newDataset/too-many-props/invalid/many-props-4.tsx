import React, { useCallback, useMemo, useState } from 'react';

interface Props {
  items: string[];
  searchTerm: string;
  sortBy: 'asc' | 'desc';
  page: number;
  limit: number;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, data: any) => void;
  placeholder: string;
}

export const ManyProps4 = ({ items, searchTerm, sortBy, page, limit, onSelect, onDelete, onEdit, placeholder }: Props) => {
  const filtered = useMemo(() => items.filter(item => item.includes(searchTerm)), [items, searchTerm]);
  const handleSelect = useCallback((id: string) => onSelect(id), [onSelect]);
  return <div>{filtered.length}</div>;
};

export const Usage4 = () => (
  <ManyProps4
    items={['a', 'b', 'c']}
    searchTerm="a"
    sortBy="asc"
    page={1}
    limit={10}
    onSelect={(id) => {}}
    onDelete={(id) => {}}
    onEdit={(id, data) => {}}
    placeholder="Search..."
  />
);