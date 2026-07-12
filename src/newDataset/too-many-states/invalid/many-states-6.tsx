import React, { useState } from 'react';

export const ManyStates6 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  return <div>{String(isLoading)}{String(isError)}{String(isSuccess)}{String(isDeleted)}{String(isEditing)}{String(isSaving)}</div>;
};