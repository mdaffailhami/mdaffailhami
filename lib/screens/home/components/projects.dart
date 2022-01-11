import 'package:flutter/material.dart';
import 'package:mdaffailhami/widgets/project_card.dart';

class MyProjects extends StatelessWidget {
  const MyProjects({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('My Projects', style: Theme.of(context).textTheme.headline4),
        Divider(),
        Wrap(
          spacing: 14,
          runSpacing: 10,
          children: [
            MyProjectCard(),
            MyProjectCard(),
            MyProjectCard(),
            MyProjectCard(),
          ],
        ),
      ],
    );
  }
}
