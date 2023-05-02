import { readable } from 'svelte/store';

// writable 저장소와 달리 readable 저장소는
// 두 번째 인수 함수을 가지고
// 읽기 가능한 저장소이며 subscribe만 가능함

// 주로 사용자 위치가 있을 때, 시계나 타이머를 구축할 때 같은
// 자동 생성되는 값에 사용

let count = 0;

export const timer = readable(count, (set) => {
	const interval = setInterval(() => {
		count++;
		set(count);
	}, 1000);

	return () => {
		// count = 0;
		clearInterval(interval);
	};
});
