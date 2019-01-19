export default function mockGame() {
    return {
        id: '41a62df6-2fd2-465b-89c9-d06c15a4ffdb',
        homeTeam: {
            name: 'Headphone United',
            score: 1
        },
        awayTeam: {
            name: 'Speakers City',
            score: 0
        },
        incidents: [
            {
                id: '203d7268-1d13-49ac-a879-52bd6d071d8a',
                type: 'GOAL_MISSED_AWAY',
                timestamp: 1547825693
            },
            {
                id: 'a87d40a1-8027-444c-82ba-7f07cdb85081',
                type: 'GOAL_ATTEMPT_AWAY',
                timestamp: 1547825691
            },
            {
                id: '683fd087-8f90-41e8-a85d-e53a4be9c128',
                type: 'AWAY_POSSESSION',
                timestamp: 1547825069
            },
            {
                id: '3896af84-1886-48e3-b396-c5b1592151b1',
                type: 'GOAL_SCORED_HOME',
                timestamp: 1547825062
            },
            {
                id: '41e418c9-d9e0-4ff8-b857-fb6db5d5adc5',
                type: 'HOME_POSSESSION',
                timestamp: 1547824982
            },
            {
                id: 'b72a9ebd-721c-49fa-aaef-45ea710ec87d',
                type: 'KICK_OFF',
                timestamp: 1547824682
            }
        ]
    }
}