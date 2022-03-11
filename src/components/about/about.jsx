import React from "react";
import "./about.css";
import { Grid, Hidden } from "@material-ui/core";
import { GreenFoot } from "../../univers/greenFoot";
import { Words } from "./words/words";
import AwsImage from "../../univers/awsImage";

export default function About() {
  return (
    <Grid
      container
      spacing={10}
      direction="column"
      justifyContent="space-evenly"
    >
      <Grid item container alignItems="center">
        <Grid item md={6} xs={12} container justifyContent="center">
          <div className="width-95">
            <div className="title">关于纽约竹子</div>
            <div className="text">
              纽约竹子，个人品牌，是传道、授业、解惑的践行者。纽约竹子经营着
              小而精的求职培训服务。没有夸张的数字，只是成功帮助上百位同学获
              得理想的offer; 没有天花乱坠的广告，只是凭借100%的好口碑在学生见
              流传；没有流水线般重复的课程，只是踏实吃透每一位同学的职场亮点
              并提供真正有效有含金量的课程。
              一致以来，致力于用最有品质的服务，最牛的人脉，最有底蕴的求职方
              法，帮助留学生精准定位就业目标，为未来求职于全职工作或实习做好
              充分的准备，实现年轻人和人生目标的飞跃。
            </div>
          </div>
        </Grid>
        <Grid item md={6} xs={12} container justifyContent="center">
          <AwsImage className="width-95" src="img-1.png" />
        </Grid>
      </Grid>
      <Grid item container alignItems="center">
        <Grid item xs={12}>
          <div className="title">为什么选择我们?</div>
          <div item className="text2">
            在纽约竹子学到的每一个求职技巧都是竹子老师融合扎实的行业经验以及业内人士的建议总结出来的。每
            份简历精修的背后都是竹子老师对岗位描述和行业洞察的精准捕捉以及对学生的充分了解。
            纽约竹子凭借高级咨询师的敏锐洞察力,有针对性地解决留学生的忧虑和困惑，让同学们可以找到未来的求
            职道路真正的发展方向。
            求职培训的整个流程进度和职业规划，都由竹子老师亲自负责。
            竹子老师对求职辅导和职业发展都有独特的方法和见解，完整高效的辅导课程让我们与众不同。
          </div>
        </Grid>
      </Grid>
      <Grid item container alignItems="center">
        <Grid item md={6} xs={12} container justifyContent="center">
          <AwsImage className="width-95" src="BigP.png" />
        </Grid>
        <Grid item md={6} xs={12} container justifyContent="center">
          <div className="width-95">
            <div className="title">纽约竹子创始人</div>
            <Words
              listItems={[
                " 美国并购交M&A Consulting高级咨询顾问",
                "  先后就职美国德勤,安永,PIMCO,索尼总部",
                "6年华尔街金融战略财务咨询工作经验",
                " 四大校园面试招聘官, 项目经理",
                "    美国注册会计师, 独立顶尖职业咨询师",
                " 成功助力上百名求职学生斩获世界500强offer",
                "  如四大,花旗,亚马逊,字节跳动等",
                "    专栏作家, 自媒体人, 琵琶演奏者",
                "   纽约女性领导力论坛唯 亚裔女性演讲嘉宾",
                "美国高校客座嘉宾",
                "竹子会客厅发起人",
              ]}
            />
          </div>
        </Grid>
      </Grid>

      <Grid item container alignItems="center">
        <Grid item md={6} xs={12} container justifyContent="center">
          <AwsImage className="width-95" src="img-5.png" />
        </Grid>
        <Grid item md={6} xs={12} container justifyContent="center">
          <div className="width-95">
            <div className="title">我还想说....</div>
            <p className="img-img-text-text">
              对于许多学生而言，他们进入了世界知名高校深造，拥有深厚的专业
              知识，但是在求职中却屡屡碰壁。不管未来你想实现你的美国梦，欧
              洲梦，还是致力于亚太地区，如何求职，如何在职场中成为了一个优
              秀的领导者，提升自己的硬实力和软实力成为了在课外不得不修的学分。
            </p>
            <p className="img-img-text-text">
              更重要的是，在求职之路中，我们要逐渐学会成长，更要明白自己想
              要成长为一个怎样的人。每一个人都想走 条属于自己成功之路，这
              条路从来都布满荆棘，为何不提前拥有满点技能呢？我们也 直有信
              心能成为你专属的长剑和盔甲。纽约竹子一直坚持用个人力量去带动
              学生，与学生保持长期亦师亦友的关系，用最真诚的心教导每一位学
              生，用个性化的教学模式，让他们都能成长为独 无二的自己。
            </p>
            <p className="img-img-text-text">
              纽约竹子一直有一个梦想，“Make an Impact”. 我们一直坚持设身处
              地地为每一个学生着想，感受着分担着每一位学生的担忧，焦虑和喜
              悦。我们一直很感谢每一位学生对我们的信任和支持，让我们陪你
              同走下去。如果可以，我们更希望我们的每一位学生也能影响他人的
              人生，成为这个世界的一束光。
            </p>
          </div>
        </Grid>
      </Grid>

      <GreenFoot>
        <div className="go-text-1">让我们开始吧！</div>
        <div className="go-text-2">让我来帮助你实现你的职场目标</div>
      </GreenFoot>
    </Grid>
  );
}
