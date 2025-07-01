const breakpoints = [720]; // 이후에 더 필요한 경우 추가할 수 있습니다.
export const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
