'use strict';

QUnit.module('Тестируем функцию sorting', function () {
	QUnit.test('sorting не меняет пустой массив', function (assert) {
		const initial = [];
		const actual = sorting(initial, []);

		const expected = [];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting не изменяет массив, если не передано никаких полей для сортировки', function (assert) {
		const initial = [
			{prop1: 1},
			{prop1: 2},
			{prop1: 3},
			{prop1: 4},
		];
		const actual = sorting(initial, []);

		const expected = [
			{prop1: 1},
			{prop1: 2},
			{prop1: 3},
			{prop1: 4},
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортирует массив по численному свойству', function (assert) {
		const initial = [
			{prop1: 30},
			{prop1: 1000},
			{prop1: 4},
			{prop1: 200},
		];
		const actual = sorting(initial, ['prop1']);

		const expected = [
			{prop1: 4},
			{prop1: 30},
			{prop1: 200},
			{prop1: 1000},
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортирует массив по строковому свойству', function (assert) {
		const initial = [
			{prop1: '30'},
			{prop1: '1000'},
			{prop1: '4'},
			{prop1: '200'},
		];
		const actual = sorting(initial, ['prop1']);

		const expected = [
			{prop1: '1000'},
			{prop1: '200'},
			{prop1: '30'},
			{prop1: '4'},
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting реализует устойчивую сортировку', function (assert) {
		const initial = [
			{prop1: 3, id: 1},
			{prop1: 3, id: 2},
			{prop1: 1, id: 1},
			{prop1: 1, id: 2},
			{prop1: 4, id: 1},
			{prop1: 4, id: 2},
			{prop1: 2, id: 1},
			{prop1: 2, id: 2},
		];
		const actual = sorting(initial, ['prop1']);

		const expected = [
			{prop1: 1, id: 1},
			{prop1: 1, id: 2},
			{prop1: 2, id: 1},
			{prop1: 2, id: 2},
			{prop1: 3, id: 1},
			{prop1: 3, id: 2},
			{prop1: 4, id: 1},
			{prop1: 4, id: 2},
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортирует по нескольким полям', function (assert) {
		const initial = [
			{prop1: 3, id: '1'},
			{prop1: 3, id: '2'},
			{prop1: 1, id: '1'},
			{prop1: 1, id: '2'},
			{prop1: 4, id: '1'},
			{prop1: 4, id: '2'},
			{prop1: 2, id: '1'},
			{prop1: 2, id: '2'},
		];
		const actual = sorting(initial, ['id', 'prop1']);

		const expected = [
			{prop1: 1, id: '1'},
			{prop1: 2, id: '1'},
			{prop1: 3, id: '1'},
			{prop1: 4, id: '1'},
			{prop1: 1, id: '2'},
			{prop1: 2, id: '2'},
			{prop1: 3, id: '2'},
			{prop1: 4, id: '2'},
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортирует русские строки по нескольким полям', function (assert) {
		const initial = [
			{prop1: 3, id: 'а'},
			{prop1: 4, id: 'а'},
			{prop1: 1, id: 'ееее'},
			{prop1: 1, id: 'фыр'},
			{prop1: 2, id: 'ооо'},
			{prop1: 4, id: 'жжж'},
			{prop1: 3, id: 'рр'},
			{prop1: 2, id: 'рр'},
		];
		const actual = sorting(initial, ['id', 'prop1']);

		const expected = [
			{prop1: 3, id: 'а'},
			{prop1: 4, id: 'а'},
			{prop1: 1, id: 'ееее'},
			{prop1: 4, id: 'жжж'},
			{prop1: 2, id: 'ооо'},
			{prop1: 2, id: 'рр'},
			{prop1: 3, id: 'рр'},
			{prop1: 1, id: 'фыр'},
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортировка Е и Ё', function (assert) {
		const initial = [
			{prop1: 1, id: 'ё'},
			{prop1: 2, id: 'е'},
		];
		const actual = sorting(initial, ['id']);

		const expected = [
			{prop1: 2, id: 'е'},
			{prop1: 1, id: 'ё'},
		];

		assert.deepEqual(actual, expected);
	});
});
