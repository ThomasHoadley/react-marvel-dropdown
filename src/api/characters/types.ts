// Model schema from character endpoint
// https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0
export type CharactersApiResponse = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: [
      {
        id: number;
        name: string;
        description: string;
        modified: Date;
        resourceURI: string;
        urls: {
          type: string;
          url: string;
        }[];
        thumbnail: {
          path: string;
          extension: string;
        };
        comics: {
          available: number;
          returned: number;
          collectionURI: string;
          items: {
            resourceURI: string;
            name: string;
          }[];
        };
        stories: {
          available: number;
          returned: number;
          collectionURI: string;
          items: {
            resourceURI: string;
            name: string;
            type: string;
          }[];
        };
        events: {
          available: number;
          returned: number;
          collectionURI: string;
          items: [
            {
              resourceURI: string;
              name: string;
            }
          ];
        };
        series: {
          available: number;
          returned: number;
          collectionURI: string;
          items: {
            resourceURI: string;
            name: string;
          }[];
        };
      }
    ];
  };
  etag: string;
};

export type CharacterQueryArgs = {
  // name: string;
  nameStartsWith: string;
  orderBy?: string;
  limit?: number;
};

export type CharacterFormatted = {
  id: number;
  name: string;
  imageUrl: string;
};

export type MarvelQueryArgs = CharacterQueryArgs;
