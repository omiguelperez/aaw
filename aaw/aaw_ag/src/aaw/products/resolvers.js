import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allProduct: (_) =>
			getRequest(URL, ''),
		productById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createProduct: (_, { Product }) =>
			generalRequest(`${URL}/`, 'POST', Product),
		updateProduct: (_, { id, Product }) =>
			generalRequest(`${URL}/${id}`, 'PUT', Product),
		deleteProduct: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;