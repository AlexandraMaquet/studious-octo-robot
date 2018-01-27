import { Article } from './../../client/app/shared/models/article.model';
import BaseCtrl from './base';

export default class CatCtrl extends BaseCtrl {
  model = Article;
}
