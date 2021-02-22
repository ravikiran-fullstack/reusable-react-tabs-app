import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  btn: {
    textTransform: "capitalize",
    marginRight: "5%",
    color: "#c59d5f",
    paddingLeft: "60%",
    background: "white",
    border: 'none',
    "&:hover": {
      borderLeft:'1px solid blue'
    },
    "&:active": {
      borderLeft:'1px solid green'
    },

  },
  btnDiv: {
    textAlign: "center",
  },
  activeTab: {
    borderLeft: '1px solid blue',
    backgroundColor: '#fafafa'
  }
}));
