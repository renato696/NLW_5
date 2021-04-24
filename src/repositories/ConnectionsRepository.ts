import { Repository } from "typeorm";
import { Connection } from "../entities/Connection"; 
//pois o typeorm tambem tem um connections, então temos que garantir que este nosso vem do entities.


class ConnectionRepository extends Repository<Connection> {


}

export { ConnectionRepository };