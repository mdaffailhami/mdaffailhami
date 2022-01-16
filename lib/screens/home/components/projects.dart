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
        Divider(),
        Wrap(
          alignment: WrapAlignment.center,
          spacing: 14,
          runSpacing: 10,
          children: [
            MyProjectCard(),
            MyProjectCard(),
            MyProjectCard(),
          ],
        ),
      ],
    );
  }
}
