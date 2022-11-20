export interface SuperheroModel  {

        id?: number,
        name: string,
        slug: string,
        powerstats: {
          intelligence: number,
          strength: number,
          speed: number,
          durability: number,
          power: number,
          combat: number
        },
        appearance: {
          gender: string,
          race: string,
          height: [
            string
          ],
          weight: [
            string
          ],
          eyeColor: string,
          hairColor: string
        },
        biography: {
          fullName: string,
          alterEgos: string,
          aliases: [
            string
          ],
          placeOfBirth: string,
          firstAppearance: string,
          publisher: string,
          alignment: string
        },
        work: {
          occupation:  string,
        },
        connections: {
          groupAffiliation: string
          relatives: string
        },
 
      
}