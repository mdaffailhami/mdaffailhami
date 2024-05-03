import 'package:flutter/material.dart';
import 'package:mdaffailhami/widgets/skill_item.dart';

class MySkills extends StatelessWidget {
  const MySkills({Key? key}) : super(key: key);

  static final GlobalKey componentKey = GlobalKey();

  @override
  Key? get key => componentKey;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(
        horizontal: MediaQuery.of(context).size.width * 0.06,
        vertical: 30,
      ),
      child: Column(
        children: [
          Text(
            'My Skills',
            style: Theme.of(context).textTheme.headlineMedium,
            textAlign: TextAlign.center,
          ),
          const Divider(),
          Container(
            constraints: const BoxConstraints(maxWidth: 800),
            child: const Wrap(
              alignment: WrapAlignment.center,
              spacing: 20,
              runSpacing: 30,
              children: [
                MySkillItem(
                  title: 'Dart',
                  image: AssetImage('assets/dart-logo.png'),
                ),
                MySkillItem(
                  title: 'Flutter',
                  image: AssetImage('assets/flutter-logo.png'),
                ),
                MySkillItem(
                  title: 'Python',
                  image: AssetImage('assets/python-logo.png'),
                ),
                MySkillItem(
                  title: 'Flask',
                  image: AssetImage('assets/flask-logo.png'),
                ),
                MySkillItem(
                  title: 'JavaScript',
                  image: AssetImage('assets/javascript-logo.png'),
                ),
                MySkillItem(
                  title: 'Node.js',
                  image: AssetImage('assets/node.js-logo.png'),
                ),
                MySkillItem(
                  title: 'Express.js',
                  image: AssetImage('assets/express-logo.png'),
                ),
                MySkillItem(
                  title: 'React',
                  image: AssetImage('assets/react-logo.png'),
                ),
                MySkillItem(
                  title: 'Roblox Studio',
                  image: AssetImage('assets/roblox-studio-logo.png'),
                ),
                MySkillItem(
                  title: 'Bootstrap',
                  image: AssetImage('assets/bootstrap-logo.png'),
                ),
                MySkillItem(
                  title: 'GitHub',
                  image: AssetImage('assets/github-logo.png'),
                ),
                MySkillItem(
                  title: 'Figma',
                  image: AssetImage('assets/figma-logo.png'),
                ),
                MySkillItem(
                  title: 'MongoDB',
                  image: AssetImage('assets/mongodb-logo.png'),
                ),
                MySkillItem(
                  title: 'Firebase',
                  image: AssetImage('assets/firebase-logo.png'),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
