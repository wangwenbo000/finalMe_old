/**
 * Created by kurishaofeng on 16/3/14.
 * 自动执行更新评论操作
 */
import crontab from 'node-crontab'

let dqs = () => {
  think.http("/home/disqus/dqs", true);
};

let getdqscomment = crontab.scheduleJob("0 */1 * * *", dqs);
if(think.env === "development"){
  dqs();
}