import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    width: "300px",
  },
  media: {
    height: "150px",
    paddingTop: "56.25%", // 16:9
    objectFit: "cover",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "-40px",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardPrice: {
    color: "#21B087",
  },
}));
