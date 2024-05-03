import 'package:flutter/material.dart';
import 'package:mdaffailhami/widgets/project_card.dart';

class MyProjects extends StatelessWidget {
  const MyProjects({Key? key}) : super(key: key);

  static final GlobalKey componentKey = GlobalKey();

  @override
  Key? get key => componentKey;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('My Projects', style: Theme.of(context).textTheme.headlineMedium),
        const Divider(),
        const Wrap(
          alignment: WrapAlignment.center,
          spacing: 14,
          runSpacing: 14,
          children: [
            MyProjectCard(
              image: NetworkImage(
                'https://raw.githubusercontent.com/mdaffailhami/glovikulator/master/assets/icons/app_icon.png',
              ),
              title: 'Glovikulator',
              caption: 'PWA Calculator app',
              url: 'https://glovikulator.netlify.app',
            ),
            MyProjectCard(
              image: NetworkImage(
                'https://raw.githubusercontent.com/mdaffailhami/mdi-todo/main/assets/mdi-todo-logo-white-bg.png',
              ),
              title: 'MDI Todo',
              caption: 'Todo List mobile app',
              url: 'https://github.com/mdaffailhami/mdi-todo',
            ),
            MyProjectCard(
              image: NetworkImage(
                'https://raw.githubusercontent.com/mdaffailhami/typing-practice/master/favicon.png',
              ),
              title: 'Typing Practice',
              caption: 'Web app to practice your typing skill',
              url: 'https://typing-practice.netlify.app',
            ),
            MyProjectCard(
              image: NetworkImage(
                'https://raw.githubusercontent.com/mdaffailhami/marketku/main/assets/marketku-logo-white-bg.png',
              ),
              title: 'MarketKu',
              caption: 'Online marketplace mobile app',
              url: 'https://github.com/mdaffailhami/marketku',
            ),
            MyProjectCard(
              image: NetworkImage(
                'https://raw.githubusercontent.com/mdaffailhami/nasi_igut_han/main/assets/profile.png',
              ),
              title: 'Nasi Igut Han',
              caption: 'Web information system of a rice ball business',
              url: 'https://github.com/mdaffailhami/nasi_igut_han',
            ),
            MyProjectCard(
              image: AssetImage('assets/mdi-blog-logo.jpg'),
              title: 'MDI Blog',
              caption: 'A random blog that I made when I was bored lol',
              url: 'https://blog-mdaffailhami.web.app',
            ),
          ],
        ),
      ],
    );
  }
}
