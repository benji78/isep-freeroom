export interface RoomConfig {
  id: string;
	floor: number;
	icalsecurise: string;
	ical: string;
}

export type SerializedRooms = {
	[roomID: string]: RoomConfig;
};

export function buildCalendarUrl(roomID: string, icalsecurise: string): string {
	const version = '2023.0.7.0';
	const param = '643d5b312e2e36325d2666683d3126663d3130';
	return `https://planning-2324.isep.fr/Telechargements/ical/Edt_${roomID}.ics?version=${version}&icalsecurise=${icalsecurise}&param=${param}`;
}

export const ROOM_CONFIG: SerializedRooms = {
	N48A: {
    id: 'N48A',
		floor: 4,
		icalsecurise:
			'FDBFF8196C89D481EC9B8A6E15A1493F624E4A7090D64124C6E9E8C21A4E2FF6AE6D78013583350CC683D550FB9C1BCB',
		ical: 'https://planning-2324.isep.fr/Telechargements/ical/Edt_N48A.ics?version=2023.0.7.0&icalsecurise=FDBFF8196C89D481EC9B8A6E15A1493F624E4A7090D64124C6E9E8C21A4E2FF6AE6D78013583350CC683D550FB9C1BCB&param=643d5b312e2e36325d2666683d3126663d3130'
	},
	N48B: {
    id: 'N48B',
		floor: 4,
		icalsecurise:
			'726215D1801ED3365370D5995A5865F6A973A5405ADDD13936E00E96142AD117A0FF216C1BCE26649805FE5AD8770C4C',
		ical: 'https://planning-2324.isep.fr/Telechargements/ical/Edt_N48B.ics?version=2023.0.7.0&icalsecurise=726215D1801ED3365370D5995A5865F6A973A5405ADDD13936E00E96142AD117A0FF216C1BCE26649805FE5AD8770C4C&param=643d5b312e2e36325d2666683d3126663d3130'
	}
};

export const OLD_ROOM_CONFIG = {
	NDC: {
		N15: {
			floor: 1,
			urlId: 'F965F00262947E391A246D2457B69710'
		},
		N16A: {
			floor: 1,
			urlId: '9D899E90DE9E91D6C5CAB361058F32B4'
		},
		N16B: {
			floor: 1,
			urlId: 'D986F82B93EECC39F1ABC2FDEC343C23'
		},
		N18: {
			floor: 1,
			urlId: 'ABEAEC630D506AF7DD9862AB5EE5C906'
		},
		N24: {
			floor: 2,
			urlId: '5D947CE83274607277AD01D70F2C459A'
		},
		N26: {
			floor: 2,
			urlId: '38C3E170CA0A0E1E9AE82556212D8155'
		},
		N28: {
			floor: 2,
			urlId: '7165D289E35F56674B4D8E412312EDD0'
		},
		N33: {
			floor: 3,
			urlId: '36337ECBE92FFEF042A97C9E6FFB604F'
		},
		N34: {
			floor: 3,
			urlId: 'F24628320A77AC422CA6B45EA19FD6EA'
		},
		N36: {
			floor: 3,
			urlId: '2A00CCCA8D2AED4FAF55B6974C3E0D10'
		},
		N38: {
			floor: 3,
			urlId: '7165D289E35F56674B4D8E412312EDD0'
		},
		// N39: {
		//   floor: 3,
		//   urlId: "88000209412DADF53FA6E61E0CEEBCE2",
		// },
		N43: {
			floor: 4,
			urlId: '8F6B7DFEE50D732CE14B976B7DA93BA8'
		},
		N44: {
			floor: 4,
			urlId: 'E4E0323659CADBB30D06BC95F4A99631'
		},
		N46: {
			floor: 4,
			urlId: '160C6FD614F5B57E8626021CA3263A0B'
		},
		N48: {
			floor: 4,
			urlId: '471294D606BE8683C19FB6BE48323E53'
		},
		N410: {
			floor: 5,
			urlId: 'F868D41EB57C391706B9EBCC96FB248D'
		},
		N411: {
			floor: 5,
			urlId: 'DF27091349DF6BF7A877BECD2D714F01'
		}
	},
	NDL: {
		L012: {
			floor: 0,
			urlId: '0B288A81494FBC4802C5EEA48257B425'
		},
		L016: {
			floor: 0,
			urlId: '91CC46BFB1976D31BA5CC391CC6D609C'
		},
		L017: {
			floor: 0,
			urlId: '1515C5B117E9B4F40F04FA44A7F644C7'
		},
		L018: {
			floor: 0,
			urlId: '880B8DD3F0646F6249ACCF5BFFC422EE'
		},
		L108: {
			floor: 1,
			urlId: '82D11A447F07B64597246E94F2C82C95'
		},
		L114: {
			floor: 1,
			urlId: '2512E34D0B9E00283753F1D30F7C2406'
		},
		L115: {
			floor: 1,
			urlId: '07A83CF5464AD5E9F2C1D92489C031AE'
		},
		L122: {
			floor: 1,
			urlId: 'A21B45139E01A0BC0F28397B0B489BA1'
		},
		L206: {
			floor: 2,
			urlId: '79D6BB64F18BB35D0A6ED410262D0096'
		},
		L207: {
			floor: 2,
			urlId: '92896397F82E1987F86D76971DAC4C03'
		},
		L212: {
			floor: 2,
			urlId: '35194AA261070CA3ABE12E8B9C7A6E98'
		},
		L213: {
			floor: 2,
			urlId: 'C06EB9DC8C29A9F51673E3AF88E60D65'
		},
		L220: {
			floor: 2,
			urlId: 'F6FA0187F6800446BEC128013B4FA96B'
		},
		L305: {
			floor: 3,
			urlId: '4FF1BF1604B83CD595F869A5EA13583F'
		},
		L306: {
			floor: 3,
			urlId: '36C02F9AE32BB25FB0D26D3D889026A8'
		},
		L311: {
			floor: 3,
			urlId: 'BFAA71953B9623A5C00223981A14E2F9'
		},
		L312: {
			floor: 3,
			urlId: '8E51799B7DC916880D693729C2C691FE'
		},
		L313: {
			floor: 3,
			urlId: '4BE3FF058E583610DE193F713E3FF440'
		},
		L416: {
			floor: 4,
			urlId: '0192287ECE0F89555AB91025F3A85E1D'
		},
		L417: {
			floor: 4,
			urlId: '32347A59C74400C25822FDD92B557C4C'
		}
	}
};
