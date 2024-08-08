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
            style: Theme.of(context).textTheme.headlineLarge,
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
                  title: 'Python',
                  image: AssetImage('assets/python-logo.png'),
                ),
                MySkillItem(
                  title: 'NumPy',
                  image: AssetImage('assets/numpy-logo.png'),
                ),
                MySkillItem(
                  title: 'Pandas',
                  image: AssetImage('assets/pandas-logo.png'),
                ),
                MySkillItem(
                  title: 'Plotly',
                  image: AssetImage('assets/plotly-logo.png'),
                ),
                MySkillItem(
                  title: 'FastAPI',
                  image: AssetImage('assets/fastapi-logo.png'),
                ),
                MySkillItem(
                  title: 'Dart',
                  image: AssetImage('assets/dart-logo.png'),
                ),
                MySkillItem(
                  title: 'Flutter',
                  image: AssetImage('assets/flutter-logo.png'),
                ),
                MySkillItem(
                  title: 'Linux',
                  image: AssetImage('assets/linux-logo.png'),
                ),
                MySkillItem(
                  title: 'Node.js',
                  image: AssetImage('assets/nodejs-logo.png'),
                ),
                MySkillItem(
                  title: 'React',
                  image: AssetImage('assets/react-logo.png'),
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
                  title: 'PostgreSQL',
                  image: AssetImage('assets/postgresql-logo.png'),
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
