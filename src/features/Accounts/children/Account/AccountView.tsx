const AccountView = () => {
  const pathname = window.location.pathname;
  const accountId = pathname.slice(10);
  // TODO: Create custom hook for paramsId, or explore other router packages (for instant loading of children...)

  return (
    <>
      <h3>Account {accountId}</h3>
    </>
  );
};

export default AccountView;
