import React, { useState } from "react";
import { makeStyles, Button, Typography, Card } from "@material-ui/core";
import { Help } from "@material-ui/icons";
import { CreateNewWallet } from "./CreateNewWallet";
import { ImportWallet } from "./ImportWallet";

const useStyles = makeStyles((theme: any) => ({
  logo: {
    width: "150px",
    height: "150px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    width: "100%",
  },
  card: {
    width: "420px",
    height: "480px",
    background: theme.custom.colors.background,
    textAlign: "center",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    padding: "20px",
    display: "flex",
    flexDirection: "column-reverse",
    flex: 1,
  },
  buttonContainer: {
    marginTop: "20px",
  },
  header: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
  headerButton: {
    borderRadius: "20px",
    padding: "10px",
    display: "flex",
  },
  headerLabel: {
    display: "flex",
    background: theme.custom.colors.background,
    color: theme.custom.colors.fontColor,
    borderRadius: "20px",
    padding: "10px",
  },
  headerLogoContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  headerLogo: {
    width: "20px",
    height: "20px",
    marginRight: "8px",
  },
  logoContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  helpIcon: {
    marginRight: "8px",
    color: theme.custom.colors.background,
  },
  helpText: {
    color: theme.custom.colors.background,
  },
}));

const URL_200 =
  "https://aws1.discourse-cdn.com/standard11/uploads/x200ms/original/1X/c1f521d52dadc8467bf0c500c6889edae203424e.png";

export function Onboarding() {
  return (
    <div>
      <OnboardingHeader />
      <ContentCard />
    </div>
  );
}

function OnboardingHeader() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.headerLabel}>
        <Typography>
          <b>Beta</b>
        </Typography>
      </div>
      <div className={classes.headerButton}>
        <Help className={classes.helpIcon} />
        <Typography className={classes.helpText}>Help</Typography>
      </div>
    </div>
  );
}

function ContentCard() {
  const classes = useStyles();
  const [content, setContent] = useState("welcome");
  return (
    <Card className={classes.card}>
      {content === "welcome" ? (
        <Welcome didSelectContent={setContent} />
      ) : content === "create-new-wallet" ? (
        <CreateNewWallet />
      ) : (
        <ImportWallet />
      )}
    </Card>
  );
}

function Welcome({
  didSelectContent,
}: {
  didSelectContent: (content: string) => void;
}) {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <div className={classes.buttonContainer}>
        <Button
          className={classes.button}
          variant="contained"
          onClick={() => didSelectContent("create-new-wallet")}
        >
          Create a new wallet
        </Button>
        <Button
          style={{ marginTop: "10px" }}
          className={classes.button}
          variant="contained"
          onClick={() => didSelectContent("import-wallet")}
        >
          I already have a wallet
        </Button>
      </div>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={URL_200} />
      </div>
    </div>
  );
}
