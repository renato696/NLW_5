import { EntityRepository, Repository } from "typeorm";
import { Connection } from "../entities/Connection"; 
//pois o typeorm tambem tem um connections, então temos que garantir que este nosso vem do entities.

@EntityRepository(Connection)
class ConnectionsRepository extends Repository<Connection> {

}

export { ConnectionsRepository };