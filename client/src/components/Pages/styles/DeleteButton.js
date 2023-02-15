import styled from "styled-components"

const COLORS = {
  primary: {
    "--main": "rgb(30,30,30",
    "--accent": "white",
  },
  secondary: {
    "--main": "#5D6366",
    "--accent": "white",
  },
};

function DeleteButton({ variant = "fill", color = "primary", ...props }) {
  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  }

  return <Component style={COLORS[color]} {...props} />;
}

const ButtonBase = styled.button`
  cursor: pointer;
  display: flex;
  font-size: 20px;
  width: 160px;
  margin-left: 35px;
  margin-bottom: 10px;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 16px;
  text-decoration: none;
`;

const FillButton = styled(ButtonBase)`
  background-color: var(--main);
  color: var(--accent);

  &:hover {
    opacity: 0.9;
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: white;
  color: var(--main);
  border: 2px solid var(--main);

  &:hover {
    background: hsl(235deg 85% 97%);
  }
`;

export default DeleteButton;