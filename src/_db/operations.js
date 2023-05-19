import faunadb, {
  Create,
  Collection,
  Ref,
  Documents,
  Paginate,
  Lambda,
  Get,
  Map,
  Delete,
  Update
} from 'faunadb';

const client = new faunadb.Client({
  secret: process.env.REACT_APP_FAUNA_KEY,
  domain: process.env.REACT_APP_FAUNA_DOMAIN || 'db.fauna.com',
});

export const newCollection = (data, col) => client.query(
  Create(
    Collection(col),
    { data: {
      ...data
    } }
  )
);

export default client;

export const getCollectionRef = (id, col) => Ref(Collection(col), id);

// Define the reference to the target set
export const getSetRef = (collectionName) => Documents(Collection(collectionName));

// All Messages
export const allCollections = (col) => client.query(
  Map(
    Paginate(Documents(Collection(col))),
    Lambda(x => Get(x))
  )
);

export const updateCollection = (id, data, col) => client.query(
  Update(
    Ref(Collection(col), id),
    {
      data: {
        ...data
      },
    },
  )
);

export const deleteCollection = (id, col) => client.query(
  Delete(Ref(Collection(col), id))
);
