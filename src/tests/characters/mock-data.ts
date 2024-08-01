import { CharactersApiResponse } from "../../api/characters/types";

export const mockCharacterApiResponse: CharactersApiResponse = {
  code: 200,
  status: "Ok",
  copyright: "© 2024 MARVEL",
  attributionText: "Data provided by Marvel. © 2024 MARVEL",
  attributionHTML:
    '<a href="http://marvel.com">Data provided by Marvel. © 2024 MARVEL</a>',
  etag: "5aecd7a28fb3af9cd0d60a86e99b13ac6b41c7f7",
  data: {
    offset: 0,
    limit: 20,
    total: 21,
    count: 20,
    results: [
      {
        id: 1010795,
        name: "Spider-Woman (Charlotte Witter)",
        description: "",
        modified: new Date("2014-03-05T13:49:34-0500"),
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/c/60/531771afe4ffa",
          extension: "jpg",
        },
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1010795",
        comics: {
          available: 13,
          collectionURI:
            "http://gateway.marvel.com/v1/public/characters/1010795/comics",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/23996",
              name: "Astonishing Tales (2009) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/21247",
              name: "Avengers/Invaders (2008) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/21248",
              name: "Avengers/Invaders (2008) #1 (Finch Variant)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/21565",
              name: "Avengers/Invaders (2008) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/22330",
              name: "Avengers/Invaders (2008) #5",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/24539",
              name: "Avengers/Invaders (2008) #12",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/6152",
              name: "Captain America (2004) #26",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/21424",
              name: "Captain America: The Death of Captain America Vol. 1 (Trade Paperback)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17325",
              name: "CAPTAIN AMERICA: THE DEATH OF CAPTAIN AMERICA VOL. 1 PREMIERE HC (Hardcover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/99746",
              name: "Spider-Man (2022) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/99748",
              name: "Spider-Man (2022) #6",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37899",
              name: "Amazing Spider-Man (1999) #5",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37900",
              name: "Amazing Spider-Man (1999) #6",
            },
          ],
          returned: 13,
        },
        series: {
          available: 7,
          collectionURI:
            "http://gateway.marvel.com/v1/public/characters/1010795/series",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/454",
              name: "Amazing Spider-Man (1999 - 2013)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/6792",
              name: "Astonishing Tales (2009)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/4864",
              name: "Avengers/Invaders (2008 - 2009)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/832",
              name: "Captain America (2004 - 2011)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/5061",
              name: "Captain America: The Death of Captain America Vol. 1 (2008)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/3127",
              name: "CAPTAIN AMERICA: THE DEATH OF CAPTAIN AMERICA VOL. 1 PREMIERE HC (2007)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/34328",
              name: "Spider-Man (2022 - Present)",
            },
          ],
          returned: 7,
        },
        stories: {
          available: 16,
          collectionURI:
            "http://gateway.marvel.com/v1/public/characters/1010795/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/7703",
              name: "2 of 6 - Death of the Dream",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/46927",
              name: "Avengers/Invaders (2008) #1",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/46928",
              name: "12XLS 1 of 12",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/46929",
              name: "12XLS 1 of 12",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/47536",
              name: "Avengers/Invaders (2008) #3",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/47537",
              name: "12XLS 3 of 12",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/49163",
              name: "Avengers/Invaders (2008) #5",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/49164",
              name: "12XLS 5 of 12",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/53224",
              name: "Cover #53224",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/53225",
              name: "Interior #53225",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/54306",
              name: "Avengers/Invaders (2008) #12",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/54307",
              name: "Interior #54307",
              type: "interiorStory",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/94843",
              name: "Amazing Spider-Man (1999) #5",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/94906",
              name: "Amazing Spider-Man (1999) #6",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/220592",
              name: "cover from Spider-Man (2022) #4",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/220596",
              name: "cover from Spider-Man (2022) #6",
              type: "cover",
            },
          ],
          returned: 16,
        },
        events: {
          available: 1,
          collectionURI:
            "http://gateway.marvel.com/v1/public/characters/1010795/events",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/255",
              name: "Initiative",
            },
          ],
          returned: 1,
        },
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/characters/1010795/spider-woman_charlotte_witter/featured?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8",
          },
          {
            type: "wiki",
            url: "http://marvel.com/universe/Spider-Woman_%28Charlotte_Witter%29?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8",
          },
          {
            type: "comiclink",
            url: "http://marvel.com/comics/characters/1010795/spider-woman_charlotte_witter?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8",
          },
        ],
      },
    ],
  },
};
