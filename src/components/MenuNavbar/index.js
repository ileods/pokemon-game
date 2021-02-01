import Menu from "./Menu";
import NavBar from "./NavBar";

const MenuNavbar = () => {
  let name= '';

  const handlerChangeNavbar = (navbar) => {
    if (navbar) {
      name='active';
    } else {
      name='deactive';
    }
  };

  return (
    <>
        <Menu name={name}/>

        <NavBar onChangeNavbar={handlerChangeNavbar} />
    </>
  );
}

export default MenuNavbar;