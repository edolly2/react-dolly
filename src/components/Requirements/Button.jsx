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

export const Button = () => {
    return (<button style={styles.button}>Hello World</button>);
}