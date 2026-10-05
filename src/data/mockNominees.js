const nominations = [
	["Maya", "Chen", "passionate", "She rebuilt a customer tasting after a late shipment and still made the visit feel easy.", "Riley", "Adams"],
	["Andre", "Brooks", "passionate", "He volunteered to train three new line leads and stayed until each of them could run the shift.", "Hannah", "Cole"],
	["Priya", "Shah", "passionate", "She redesigned the weekly huddle so every shift hears the same priorities.", "Luis", "Ortega"],
	["Luis", "Ortega", "passionate", "He covered a holiday production weekend without being asked, then walked the next crew through what changed.", "Priya", "Shah"],
	["Hannah", "Cole", "passionate", "She turned a customer complaint into a packing checklist the whole team now uses.", "Andre", "Brooks"],
	["Jordan", "Blake", "passionate", "He led a flavor trial the sales team now brings on every customer visit.", "Maya", "Chen"],
	["Samira", "Haddad", "passionate", "She organized a cross-shift tasting so the night crew could weigh in before a formula change.", "Jordan", "Blake"],
	["Elena", "Vasquez", "courageous", "She stopped a shortcut that would have skipped a quality check, and explained why it mattered.", "Marcus", "Webb"],
	["Marcus", "Webb", "courageous", "He paused a run when a label did not match the spec, even though the truck was already waiting.", "Elena", "Vasquez"],
	["Naomi", "Park", "courageous", "She asked leadership to revisit a schedule that was wearing her team out.", "Owen", "Grant"],
	["Owen", "Grant", "courageous", "He flagged a safety concern on the dock before anyone else noticed it.", "Naomi", "Park"],
	["Aisha", "Rahman", "courageous", "She told a customer the honest lead time instead of overpromising.", "Caleb", "Nguyen"],
	["Caleb", "Nguyen", "courageous", "He challenged a process that kept failing the same audit item until it was rewritten.", "Aisha", "Rahman"],
	["Freya", "Lindstrom", "courageous", "She backed a teammate who made an unpopular call that turned out to be the right one.", "Owen", "Grant"],
	["Diego", "Alvarez", "relentless", "He stayed with a difficult account until the issue was actually closed, not just handed off.", "Keisha", "Thompson"],
	["Keisha", "Thompson", "relentless", "She reworked a report until the numbers reconciled, then showed the team where they had been drifting.", "Diego", "Alvarez"],
	["Ben", "Ito", "relentless", "He kept a late order moving through two equipment stops and still hit the ship window.", "Rosa", "Delgado"],
	["Rosa", "Delgado", "relentless", "She followed a missing pallet from our dock to the customer dock and got it there the same day.", "Ben", "Ito"],
	["Tyler", "Nguyen", "relentless", "He finished the month-end close after the system went down, and the books still tied out.", "Amara", "Singh"],
	["Amara", "Singh", "relentless", "She tracked a recurring defect until the root cause was found, not just patched.", "Tyler", "Nguyen"],
	["Chris", "Doyle", "relentless", "He kept calling until a carrier confirmed a delayed delivery, then updated every customer affected.", "Rosa", "Delgado"],
	["Lila", "Moreau", "inspiring", "She mentors new hires through their first customer visits and leaves them ready to go alone.", "Jamal", "Carter"],
	["Jamal", "Carter", "inspiring", "He started a Friday note that names one teammate from each shift, and people look forward to it.", "Lila", "Moreau"],
	["Sofia", "Rossi", "inspiring", "She turned a tense planning meeting into a shared plan everyone could defend.", "Noah", "Kim"],
	["Noah", "Kim", "inspiring", "He coaches without taking over, and the people he works with get better because of it.", "Sofia", "Rossi"],
	["Grace", "Okonkwo", "inspiring", "She shared her sales notes so the whole region could use what she had learned.", "Ethan", "Wallace"],
	["Ethan", "Wallace", "inspiring", "He celebrates small wins out loud, and the team works harder because someone notices.", "Grace", "Okonkwo"],
	["Mei", "Lin", "inspiring", "She invited quieter teammates into the decision, and the plan got better.", "Jamal", "Carter"],
	["Harper", "Quinn", "authentic", "She owned a mistake in front of the customer, then fixed it before the next delivery.", "Mateo", "Ruiz"],
	["Mateo", "Ruiz", "authentic", "He says what he thinks in the room, kindly, and people trust the answer.", "Harper", "Quinn"],
	["Ingrid", "Solberg", "authentic", "She keeps her word on small commitments, which makes the big ones believable.", "Devon", "Clarke"],
	["Devon", "Clarke", "authentic", "He brings his real questions to the huddle instead of pretending he already knows.", "Ingrid", "Solberg"],
	["Yasmin", "Farouk", "authentic", "She writes feedback the way she would want to receive it, and people actually use it.", "Patrick", "Byrne"],
	["Patrick", "Byrne", "authentic", "He admitted a process he built was the problem, then helped replace it.", "Yasmin", "Farouk"],
	["Chloe", "Bennett", "authentic", "Customers ask for her by name because she shows up as herself.", "Harper", "Quinn"],
	["Aaron", "Patel", "reliable", "Every shift calls him when the count has to be right, and it is.", "Bianca", "Ferreira"],
	["Bianca", "Ferreira", "reliable", "She closes every ticket she opens, including the unglamorous ones.", "Aaron", "Patel"],
	["Henry", "Walsh", "reliable", "He never misses a handoff between first and second shift.", "Nia", "Jackson"],
	["Nia", "Jackson", "reliable", "She delivers the weekly scorecard before anyone has to ask for it.", "Henry", "Walsh"],
	["Omar", "Farid", "reliable", "He is on the dock early whenever a truck is due.", "Quinn", "Harper"],
	["Quinn", "Harper", "reliable", "She finishes the documentation the same day the work happens.", "Omar", "Farid"],
	["Rebecca", "Cho", "reliable", "If she says the sample will be there Thursday, it is there Thursday.", "Nia", "Jackson"],
];

export const mockNominees = nominations.map(
	(
		[
			firstName,
			lastName,
			trait,
			reason,
			nominatedByFirstName,
			nominatedByLastName,
		],
		index
	) => ({
		id: `recMock${String(index + 1).padStart(3, "0")}`,
		fields: {
			"First Name": firstName,
			"Last Name": lastName,
			Trait: trait,
			Reason: reason,
			"Nominated By First Name": nominatedByFirstName,
			"Nominated By Last Name": nominatedByLastName,
			Nominee: index + 1,
			Suppress: false,
		},
	})
);

export function createNomineeRecord(nomination, nomineeNumber) {
	return {
		id: `recMock${Date.now()}`,
		fields: {
			"First Name": nomination.nomineeFName,
			"Last Name": nomination.nomineeLName,
			Trait: nomination.trait,
			Reason: nomination.reason,
			"Nominated By First Name": nomination.nominatedByFName,
			"Nominated By Last Name": nomination.nominatedByLName,
			Nominee: nomineeNumber,
			Suppress: false,
		},
	};
}
