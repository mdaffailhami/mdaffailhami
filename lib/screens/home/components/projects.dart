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
        Wrap(
          alignment: WrapAlignment.center,
          spacing: 14,
          runSpacing: 14,
          children: const [
            MyProjectCard(
              image: NetworkImage(
                'https://raw.githubusercontent.com/mdaffailhami/glovikulator/master/assets/icons/app_icon.png',
              ),
              title: 'Glovikulator',
              caption: 'Aplikasi PWA Calculator',
              url: 'https://glovikulator.netlify.app',
            ),
            MyProjectCard(
              image: NetworkImage(
                'https://raw.githubusercontent.com/mdaffailhami/mdi-todo/main/assets/mdi-todo-logo-white-bg.png',
              ),
              title: 'MDI Todo',
              caption: 'Aplikasi Todo List untuk Android',
              url: 'https://github.com/mdaffailhami/mdi-todo',
            ),
            MyProjectCard(
              image: NetworkImage(
                'https://raw.githubusercontent.com/mdaffailhami/typing-practice/master/favicon.png',
              ),
              title: 'Typing Practice',
              caption: 'Aplikasi web untuk latihan mengetik',
              url: 'https://typing-practice.netlify.app',
            ),
            MyProjectCard(
              image: NetworkImage(
                'https://raw.githubusercontent.com/mdaffailhami/marketku/main/assets/marketku-logo-white-bg.png',
              ),
              title: 'MarketKu',
              caption: 'Aplikasi Toko Online untuk Android',
              url: 'https://github.com/mdaffailhami/marketku',
            ),
            MyProjectCard(
              image: AssetImage('assets/mdi-blog-logo.jpg'),
              title: 'MDI Blog',
              caption: 'Blog yang isinya random ga jelas :v',
              url: 'https://blog-mdaffailhami.web.app',
            ),
          ],
        ),
      ],
    );
  }
}
