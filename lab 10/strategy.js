class Info {
    logging(content) {
        console.info(content);
      }
}
class Warn {
    logging(content) {
        console.warn(content);
      }
}
class Error {
    logging(content) {
        console.error(content);
      }
}
class Table {
    logging(content) {
        console.table(content);
      }
}


class Strategy {
  setStrategy(alert) {
    this.alert = alert;
  }
  logging(msg) {
    this.alert.logging(msg);
  }
}

const strategy = new Strategy();

strategy.setStrategy(new Info());
strategy.logging("info....");

strategy.setStrategy(new Warn());
strategy.logging("warn....");

strategy.setStrategy(new Error());
strategy.logging("error....");

strategy.setStrategy(new Table());
strategy.logging(["table", "table"]);

