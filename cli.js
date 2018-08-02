#!/usr/bin/env node

const FakeMe = require('fakeme');
const chalk = require('chalk');

const fm = new FakeMe();
const name = fm.random('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''), 10).join('');
const password = fm.id({length: 20})[0];
const hellolist = [
  '李甜甜，你又给人创建用户呢。。',
  '看老子给你生成一个用户yo～',
  '李甜甜是zz～',
  '啥时候回家啊？',
  '想吃饭。。。',
  '我们一起学狗叫，一起汪汪汪汪汪！',
  '切。。。',
  '你不服啊？',
  '彭吉元真牛逼！',
  '无聊啊～',
  '我想你应该和忙吧？只看前三个字就行了。',
  '众生皆苦，只有你是草莓味～',
  '"你今天有点儿怪" "怎么怪了？" "怪好看的～"',
  '"我有一个超能力" "什么超能力？" "超喜欢你～"',
  '见什么世面，见见你就好啦！',
  '你不是人 你是这世界 写给我的情书',
  '我爱我的祖国 我的爸爸 我的妈妈 和你',
  '我懒 你也懒 后来我变勤奋了 是为了能让你接着懒',
  '有个人长的像洋葱，走着走着就哭了…….',
  '我曾经得过精神分裂症，但现在我们已经康复了。',
  '小明理了头发，第二天来到学校，同学们看到他的新发型，笑道：小明，你的头型好像个风筝哦！小明觉得很委屈，就跑到外面哭。哭着哭着～他就飞起来了…………',
  '小企鹅有一天问他奶奶，“奶奶奶奶，我是不是一只企鹅啊？”“是啊，你当然是企鹅。”小企鹅又问爸爸，“爸爸爸爸，我是不是一只企鹅啊？”“是啊，你是企鹅啊，怎么了?”“可是，可是我怎么觉得那么冷呢？”',
  '爱你 笔芯'
];
const hello = fm.random(hellolist)[0];

console.log();
console.log(chalk.cyan(`[ ${hello} ]`));
console.log();
console.log(chalk.green('用户名: '), chalk.cyan(name));
console.log(chalk.green('密码: '), chalk.cyan(password));
console.log();
