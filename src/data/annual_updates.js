// updated for
const figures = {
	year: 2023,

	// The maximum you can contribute in {figures.year} is $22,500
	four01k_max_under_50: 22500,

	// 	MARRIED, FILING JOINTLY
	// As a couple, will your pre-tax income be less than ${figures.roth_married_jointly_min} in {figures.year}? 
	// That's the maximum amount you can earn to qualify for a Roth IRA if you file your taxes as a married person.
	roth_married_jointly_min: 218000,
	// As a couple, will your pre-tax income be less than $228,000 in {figures.year}? 
	// $228,000 is the maximum you can earn and still contribute to a Roth IRA.
	roth_married_jointly_max: 228000,
	
	// MARRIED, FILING SEPARATELY
	// Will you earn less than ${figures.roth_married_not_jointly_min} in {figures.year}?
	roth_married_not_jointly_min: 10000,

	// SINGLE TAXPAYERS AND HEADS OF HOUSEHOLD
	roth_single_min: 138000,
	// Will you earn less than $153,000 in {figures.year}? That's the minimim amount you can earn to qualify for a Roth IRA if you are married but file your taxes as a single person
	roth_single_max: 153000,

	// Every year, the maximum you can contribute to a Roth IRA if you're 50 or over is ${figures.roth_max_50_and_over}.
	roth_max_50_and_over: 7500,
	// Every year, the maximum you can contribute to a Roth IRA if you're below 50 is $6,000.
	roth_max_under_50: 6500,
};

export default figures;
