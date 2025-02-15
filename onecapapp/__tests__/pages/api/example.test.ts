// import { createMocks } from 'node-mocks-http';
// import handleExample from '../pages/api/example';

// describe('API Example Route', () => {
//   it('returns correct response', async () => {
//     const { req, res } = createMocks({
//       method: 'GET',
//     });

//     await handleExample(req, res);

//     expect(res._getStatusCode()).toBe(200);
//     expect(JSON.parse(res._getData())).toEqual(
//       expect.objectContaining({
//         // Add expected response structure
//       })
//     );
//   });

//   it('handles errors appropriately', async () => {
//     const { req, res } = createMocks({
//       method: 'POST', // Testing wrong method
//     });

//     await handleExample(req, res);

//     expect(res._getStatusCode()).toBe(405);
//   });
// }); 