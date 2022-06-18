const styles = {
    button: {
      padding: "7px 20px",
      cursor: "pointer",
      borderRadius: "8px",
      boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
      minWidth: "110px",
      whiteSpace: "nowrap",
    }
  }

export const Nav = () => {
    return (
    <nav>
        <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
            <li>Link 5</li>
        </ul>
    </nav>);
}