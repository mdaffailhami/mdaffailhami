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
        Text('My Projects', style: Theme.of(context).textTheme.headline4),
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
                'https://raw.githubusercontent.com/mdaffailhami/typing-practice/master/pages/favicon.png',
              ),
              title: 'Typing Practice',
              caption: 'Aplikasi web untuk latihan mengetik',
              url: 'https://typing-practice.netlify.app',
            ),
          ],
        ),
      ],
    );
  }
}
