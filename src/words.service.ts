import { Injectable } from "@nestjs/common";
import { readFileSync } from "fs";
import * as wordListPath from "french-wordlist";
import { SolvingQueryModel } from "./dto/solvingQuery.model";

@Injectable()
export class WordService {

  words: string[] = readFileSync(wordListPath, "utf8").split("\n");

  getWords(): string[] {
    return this.words;
  }

  getRandomWord(): string {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  getWord(pos: number): string {
    return this.words[pos] || "non trouvé";
  }

  existWord(word: string): boolean {
    return this.words.includes(word);
  }

  like(word: string): string[] {
    return this.words.filter(
      value => new RegExp(`^.*${word}.*$`).test(value)
    );
  }

  solving(query: SolvingQueryModel): string[] {
    let restricedCharacteresWithComa = query.restrictedCharacters.includes("e") ? query.restrictedCharacters + ",é" : query.restrictedCharacters;

    let wordToRegex: string =
      query.word.split("e").join("[eé]");

    let queryToRegex: string =
      wordToRegex.split(
        "-").join(
        `[^${restricedCharacteresWithComa.split(",").join("")}]`
      );

    console.log(queryToRegex);
    return this.words.filter(
      value => new RegExp(`^${queryToRegex}$`).test(value)
    );
  }

}