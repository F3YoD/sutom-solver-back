import { Module } from "@nestjs/common";
import { WordService } from "./words.service";
import { WordsController } from "./words.controller";

@Module({
  imports: [],
  controllers: [WordsController],
  providers: [WordService]
})
export class AppModule {
}
