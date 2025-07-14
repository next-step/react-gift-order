import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const useSearchParamState = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [activeGenerationButton, setActiveGenerationButton] = useState<string>('');
  const [activeFilterButton, setActiveFilterButton] = useState<string>('');

  useEffect(() => {
    const generation = searchParams.get('generation') ?? 'ALL';
    const filter = searchParams.get('filter') ?? 'MANY_WISH';

    setActiveGenerationButton(generation);
    setActiveFilterButton(filter);
  }, [searchParams]);

  const handleGenerationGroupClick = (id: string) => {
    setActiveGenerationButton(id);
    searchParams.set('generation', id);
    setSearchParams(searchParams, { replace: true });
  };

  const handleFilterGroupClick = (id: string) => {
    setActiveFilterButton(id);
    searchParams.set('filter', id);
    setSearchParams(searchParams, { replace: true });
  };

  return {
    handleGenerationGroupClick,
    handleFilterGroupClick,
    activeGenerationButton,
    activeFilterButton,
  };
};

export default useSearchParamState;
