import express from 'express';
import {
  create,
  changeContent,
  update,
  deletePageRecord,
  list,
  details,
  loadContent,
  delHome,} from './page.controller';
const pageRoute = express.Router();

pageRoute.post('/', create);
pageRoute.post('/:pageId/content', changeContent);
pageRoute.put('/:pageId', update)

pageRoute.delete('/:pageId', deletePageRecord);

pageRoute.get('/', list);
pageRoute.get('/:pageId', details);

pageRoute.get('/:pageId/content', loadContent)

pageRoute.delete('/',delHome);
export default pageRoute;
