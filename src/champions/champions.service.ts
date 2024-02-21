import { Injectable } from '@nestjs/common';
import { CreateChampionDto } from './dto/create-champion.dto';
import { UpdateChampionDto } from './dto/update-champion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Champion } from './entities/champion.entity';

@Injectable()
export class ChampionsService {

  constructor(
    @InjectRepository(Champion)
    private readonly championRepository:Repository<Champion>
  ){}


  async create(createChampionDto: CreateChampionDto) {
    return await this.championRepository.save(createChampionDto);
  }

  async findAll() {
    return await this.championRepository.find();
  }

  async findOne(id: number) {
    return await this.championRepository.findOneBy({id});
  }

  async update(id: number, updateChampionDto: UpdateChampionDto) {
    return await this.championRepository.update(id,updateChampionDto);
  }

  async remove(id: number) {
    return await this.championRepository.delete(id);
  }
}
