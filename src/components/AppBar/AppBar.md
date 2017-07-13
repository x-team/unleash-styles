App bar with logo:

    <AppBar appBarLogo={<Logo />} />

App bar with logo, menu:

    <AppBar appBarLogo={<Logo />}>
      <Tabs>
        <Tab label="home" />
        <Tab label="my path" />
        <Tab label="profile" />
        <Tab label="goals" />
        <Tab label="skills" />
      </Tabs>
      <Menu menuButton={<Avatar type="small" label="NO" />}>
        <MenuItem label="nikita" type="important" />
        <MenuItem label="nikita.ormonov@eleken.co" type="email" />
        <MenuItem label="edit profile" type="link" />
        <MenuItem label="sign out" type="link" />
      </Menu>
    </AppBar>
