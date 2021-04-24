import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository"


class UsersService {
    private usersRepository: Repository<User>;

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create(email: string) {
        
        //verificar se o usuário existe

        const userExist = await this.usersRepository.findOne({
            email
        });
        //se existir, retornar user
        if(userExist) {
            return userExist;
        }
        //se não existir, salvar no DB
        const user = this.usersRepository.create({
            email,
        });
        await this.usersRepository.save(user);
        return user;
        
    }

}

export { UsersService }