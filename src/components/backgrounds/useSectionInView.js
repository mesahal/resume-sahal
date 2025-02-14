import { useInView } from 'react-intersection-observer';

export function useSectionInView() {
  return useInView({
    threshold: 0.1,
    triggerOnce: true
  });
}
