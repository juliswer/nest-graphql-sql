import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postsRespositories: Repository<Post>,
  ) {}

  findAll(): Promise<Post[]> {
    return this.postsRespositories.find();
  }
}
