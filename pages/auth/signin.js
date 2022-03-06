import { getProviders, signIn as SignIntoProvider} from 'next-auth/react';

const signIn = ({ providers }) => {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => SignIntoProvider(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
      secret: "5a14b81d3045edc7339dab2f9a3ae4f2",
    },
  };
}

export default signIn