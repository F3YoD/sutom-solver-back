import { Controller, Get, Param, Query } from "@nestjs/common";
import { WordService } from "./words.service";
import { SolvingQueryModel } from "./dto/solvingQuery.model";

@Controller("word")
export class WordsController {

  constructor(private readonly wordService: WordService) {
  }

  @Get("random")
  getRandomWord() {
    return this.wordService.getRandomWord();
  }

  @Get("byId/:pos")
  getWord(@Param("pos") pos: number) {
    return this.wordService.getWord(pos);
  }

  @Get("exist/:word")
  existWord(@Param("word") word: string) {
    return this.wordService.existWord(word);
  }

  @Get("like/:word")
  likeWord(@Param("word") word: string) {
    return this.wordService.like(word);
  }

  @Get("solving")
  solving(@Query() query: SolvingQueryModel) {
    return this.wordService.solving(query)
  }

}