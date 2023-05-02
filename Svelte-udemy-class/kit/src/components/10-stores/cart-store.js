import { writable } from 'svelte/store';

// 일반적으로 저장소의 주요 장점은
// 컴포넌트 내부 밖에서 데이터를 관리할 중심부가 있다는 것

// 컴포넌트로 직접적인 커뮤니케이션이 필요할 땐
// 프로퍼티나 커스텀 이벤트가 저장소보다 더 유용함
// 즉, 직속 부모-자식 관계일 땐 프로퍼티와 커스텀 이벤트를 쓰기

// 직속 관계가 아닌 컴포넌트 간의 관계에선 저장소를 쓰는 게 좋음
// 애플리케이션의 일반적인 전역 상태를 관리 유용
// 애플리케이션의 다른 파트에서 데이터가 필요할 땐 저장소를 고려

const cart = writable([
	{
		id: 'p3',
		title: 'Test',
		price: 9.99
	},
	{
		id: 'p4',
		title: 'Test',
		price: 9.99
	}
]);

function createCart() {
	// 외부에서 update()나 set()을 호출할 수 없지만,
	// 사용자 지정 저장소 내부에 원하는 메서드나 작업을 추가 가능
	return {
		subscribe: cart.subscribe,
		addItem: (item) => {
			cart.update((items) => {
				if (items.find((i) => i.id === item.id)) {
					return [...items];
				}
				return [...items, item];
			});
		},
		removeItem: (id) => {
			cart.update((items) => {
				return items.filter((i) => i.id !== id);
			});
		}
	};
}

export default createCart();
