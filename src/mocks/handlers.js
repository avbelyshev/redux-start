import { rest } from 'msw';

export const handlers = [
  rest.get('https://books-82c9.restdb.io/rest/chapters', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          _id: 0, title: 'First chapter', completed: false,
          subsections: [
            { _id: 0, title: 'Subsection 1', completed: true },
            { _id: 1, title: 'Subsection 2', completed: false }
          ]
        }
      ])
    );
  })
];
