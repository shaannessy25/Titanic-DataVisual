const index = require('../challenges-1.js')
const fs = require('fs');

const json_data = './titanic-passengers.json'

	function loadData(cb) {
		fs.readFile(json_data, 'utf8', function (err, data) {
			try {
				data = JSON.parse(data)
				cb(data)
			} catch (err) {
				cb(err)
			}
		});
	}

	let data = null

	beforeAll((done) => {
		loadData((json) => {
			data = json
			done()
		})
	})


describe('Challenge 1 Titanic', () => {

	test('Test getTotalpassengers', () => {
		expect(index.getTotalPassengers(data)).toBe(891)
	})

	test('Test getSurvivorCount', () => {
		expect(index.getSurvivorCount(data)).toBe(342)
	})

	test('Test getSurvivorCount', () => {
		expect(index.getSurvivorCount(data)).toBe(342)
	})

	test('Test getCasualityCount', () => {
		expect(index.getCasualityCount(data)).toBe(549)
	})

	test('Test countPassengersInClass', () => {
		expect(index.countPassengersInClass(data, 1)).toBe(216)
		expect(index.countPassengersInClass(data, 2)).toBe(184)
		expect(index.countPassengersInClass(data, 3)).toBe(491)
	})

	test('Test getSurvivorCountForClass', () => {
		expect(index.getSurvivorCountForClass(data, 1)).toBe(136)
		expect(index.getSurvivorCountForClass(data, 2)).toBe(87)
		expect(index.getSurvivorCountForClass(data, 3)).toBe(119)
	})

	test('Test getCasualityCountForClass', () => {
		expect(index.getCasualityCountForClass(data, 1)).toBe(80)
		expect(index.getCasualityCountForClass(data, 2)).toBe(97)
		expect(index.getCasualityCountForClass(data, 3)).toBe(372)
	})

	test('Test getMinAge', () => {
		expect(index.getMinAge(data)).toBe(0.42)
	})

	test('Test getMaxAge', () => {
		expect(index.getMaxAge(data)).toBe(80)
	})

	test('Test getEmbarkedCount', () => {
		expect(index.getEmbarkedCount(data, 'S')).toBe(644)
		expect(index.getEmbarkedCount(data, 'C')).toBe(168)
		expect(index.getEmbarkedCount(data, 'Q')).toBe(77)
	})

	test('Test getMinFare', () => {
		expect(index.getMinFare(data)).toBe(0)
	})

	test('Test getMaxFare', () => {
		expect(index.getMaxFare(data)).toBe(512.3292)
	})

	test('Test getPassengersByGender', () => {
		expect(index.getPassengersByGender(data, 'male')).toBe(577)
		expect(index.getPassengersByGender(data, 'female')).toBe(314)
	})

	test('Test getSurvivorsByGender', () => {
		expect(index.getSurvivorsByGender(data, 'male')).toBe(109)
		expect(index.getSurvivorsByGender(data, 'female')).toBe(233)
	})

	test('Test getCasualitiesByGender', () => {
		expect(index.getCasualitiesByGender(data, 'male')).toBe(468)
		expect(index.getCasualitiesByGender(data, 'female')).toBe(81)
	})

	test.skip('Test getSurvivorsByPClass', () => {
		expect(index.getSurvivorsByPClass(data, 1)).toBe(136)
		expect(index.getSurvivorsByPClass(data, 2)).toBe(87)
		expect(index.getSurvivorsByPClass(data, 3)).toBe(119)
	})

	test.skip('Test getCasualitiesByPClass', () => {
		expect(index.getCasualitiesByPClass(data, 1)).toBe(80)
		expect(index.getCasualitiesByPClass(data, 2)).toBe(97)
		expect(index.getCasualitiesByPClass(data, 3)).toBe(372)
	})

	test.skip('Test getUniqueValues', () => {
		expect(index.getUniqueValues(data, 'pclass').sort()).toEqual([3, 2, 1].sort())
		expect(index.getUniqueValues(data, 'embarked').sort()).toEqual(['C', 'S', 'Q', undefined].sort())
		expect(index.getUniqueValues(data, 'sex').sort()).toEqual(['male', 'female'].sort())
		expect(index.getUniqueValues(data, 'survived').sort()).toEqual(['Yes', 'No'].sort())
	})

	test('Test getTotalFare', () => {
		expect(index.getTotalFare(data)).toBe(28693.94929999997)
	})

	test('Test getAverageFare', () => {
		expect(index.getAverageFare(data)).toBe(32.2042079685746)
	})

	test('Test getMedianFare', () => {
		expect(index.getMedianFare(data)).toBe(256.1646)
	})

	test('Test getAverageAge', () => {
		expect(index.getAverageAge(data)).toBe(29.69911764705882)
	})

	test('Test getMedianAge', () => {
		expect(index.getMedianAge(data)).toBe(39.79)
	})

	test('Test getAverageAgeByGender', () => {
		expect(index.getAverageAgeByGender(data, 'male')).toBe(30.72664459161148)
		expect(index.getAverageAgeByGender(data, 'female')).toBe(27.915708812260537)
	})

})


