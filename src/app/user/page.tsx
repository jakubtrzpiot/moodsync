const user = {
  name: 'John Doe',
  email: 'test@gmail.com',
};

const UserPage = () => {
  //   const location = useLocation();
  //   const { data: user, isLoading } = useQuery<User>(
  //     ['user', location.pathname],
  //     () => getUser(location.pathname),
  //   );

  //   if (isLoading) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <main>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </main>
  );
};

export default UserPage;
